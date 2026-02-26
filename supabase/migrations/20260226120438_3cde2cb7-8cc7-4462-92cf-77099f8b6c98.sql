
-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  file_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Allow anonymous inserts (public contact form)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous select own" ON public.contact_submissions
  FOR SELECT TO anon USING (false);

-- Create attachments storage bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('attachments', 'attachments', true);

-- Allow anyone to upload files to attachments bucket
CREATE POLICY "Allow public uploads to attachments"
  ON storage.objects FOR INSERT TO anon
  WITH CHECK (bucket_id = 'attachments');

-- Allow public read access to attachments
CREATE POLICY "Allow public read of attachments"
  ON storage.objects FOR SELECT TO anon
  USING (bucket_id = 'attachments');
