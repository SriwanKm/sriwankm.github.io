module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/send-email',
          destination: 'http://localhost:8000/index.php', // Replace with your PHP file's path
        },
      ];
    },
  };