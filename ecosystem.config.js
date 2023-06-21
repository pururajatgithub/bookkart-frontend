module.exports = {
  apps : [{
    script: 'npm run dev'
  }],

  deploy : {
    production : {
      key  : 'ubuntu.pem',
      user : 'root',
      host : '13.233.104.189',
      ref  : 'origin/master',
      repo : 'https://github.com/pururajatgithub/bookkart-frontend.git',
      path : '/home/ubuntu/Desktop',
      'pre-deploy-local': '',
      'post-deploy' : 'source /root/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options':'ForwardAgent=yes'
    }
  }
};