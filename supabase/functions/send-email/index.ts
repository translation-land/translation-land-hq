import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, file_url } = await req.json();

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not configured');
    }

    const fileSection = file_url
      ? `<p><strong>فایل پیوست:</strong> <a href="${file_url}">${file_url}</a></p>`
      : '<p><em>بدون فایل پیوست</em></p>';

    const htmlBody = `
      <div dir="rtl" style="font-family: Tahoma, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #16213e; padding-bottom: 10px;">پیام جدید از tarjome-land.ir</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #333; width: 120px;">نام:</td>
            <td style="padding: 10px; color: #555;">${name}</td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold; color: #333;">ایمیل:</td>
            <td style="padding: 10px; color: #555;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #333;">پیام:</td>
            <td style="padding: 10px; color: #555; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        ${fileSection}
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
        <p style="color: #999; font-size: 12px;">ارسال شده از فرم تماس tarjome-land.ir</p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Tarjome Land <onboarding@resend.dev>',
        to: ['m.amin.rezai@gmail.com'],
        subject: 'New message from tarjome-land.ir',
        html: htmlBody,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend error:', data);
      return new Response(JSON.stringify({ error: data }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Edge function error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
