module.exports = {
  apps : [{
    script: 'npm run dev'
  }],

  deploy : {
    production : {
      key  : 'ubuntu.pem',
      user : 'ubuntu',
      host : '43.204.149.220',
      ref  : 'origin/master',
      repo : 'https://github.com/pururajatgithub/bookkart-frontend.git',
      path : '/home/ubuntu/Desktop',
      'pre-deploy-local': '',
    'post-deploy' : 'source /.nvm/nvm.sh && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options':'ForwardAgent=yes'
    }
  }
};