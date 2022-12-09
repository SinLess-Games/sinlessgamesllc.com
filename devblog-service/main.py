from application.app import create_app
from application.config import DevelopmentConfig, ProductionConfig, TestingConfig


if __name__ == '__main__':

    app = create_app(DevelopmentConfig)
    app.run(debug=DevelopmentConfig.DEBUG, port=DevelopmentConfig.PORT, ssl_context=('Certificates/public.pem', 'Certificates/priv.key'))
