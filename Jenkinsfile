node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     def myTestContainer = docker.image('node:12')
     myTestContainer.pull()
     myTestContainer.inside {
       sh 'yarn install --only=dev'
       sh 'yarn test:unit'
     }
   }
   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
       def app = docker.build("vernaillen/vernaillen-website:${commit_id}", '.').push()
     }
   }
}
