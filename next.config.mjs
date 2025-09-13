/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mkigwhftxgrryeyfnxgc.supabase.co",
      },
    ],
  },
};

export default nextConfig;
