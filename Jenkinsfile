pipeline {
    agent any


    stages {
        stage('Instalar Dependências') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }


      stage('Configurar Banco de Dados') {
    steps {
            script {
                def mysqlUser = env.DB_USER
                def mysqlPassword = env.DB_PASSWORD
                def mysqlHost = env.DB_HOST
                def mysqlDb = env.DB_NAME

                def checkDbCommand = "\"C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\mysql.exe\" -u${mysqlUser} -p${mysqlPassword} -h${mysqlHost} -N -B -e \"SHOW DATABASES LIKE '${mysqlDb}';\""
                def output = bat(script: checkDbCommand, returnStdout: true).trim()

                if (output == "${mysqlDb}") {
                    echo "Banco de dados '${mysqlDb}' já existe. Pulando criação..."
                } else {
                    echo "Banco de dados '${mysqlDb}' não encontrado. Criando agora..."
                    bat "\"C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\mysql.exe\" -u${mysqlUser} -p${mysqlPassword} -h${mysqlHost} < sql/init.sql"
                }
            }
        }
    }



        stage('Executar Testes') {
            steps {
                script {
                    bat 'npx mocha test/usuarios.test.js --exit'
                }
            }
        }
    }


    post {
        always {
            echo 'Pipeline finalizado.'
        }
        success {
            echo 'Todos os testes passaram com sucesso!'
        }
        failure {
            echo 'Alguns testes falharam.'
        }
    }
}
