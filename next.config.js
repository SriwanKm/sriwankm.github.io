// module.exports = {
//     async rewrites() {
//       return [
//         {
//           source: '/api/send-email',
//           destination: 'http://localhost:8000/index.php', // Replace with your PHP file's path
//         },
//       ];
//     },
//   };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;