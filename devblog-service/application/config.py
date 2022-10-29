from decouple import config


class Config:
    PORT = 8092
    ENV = 'production'
    DEBUG = False
    TESTING = False
    SECRET_KEY = config('SECRET_KEY')

    # Database
    SQL_USER = config('SQL_USER')
    SQL_PASSWORD = config('SQL_PASSWORD')
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{SQL_USER}:{SQL_PASSWORD}@192.168.86.157:3306/DevBlog"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False


# Testing config
class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_ECHO = True


# Development config
class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    # Database
    SQL_USER = config('SQL_USER')
    SQL_PASSWORD = config('SQL_PASSWORD')
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{SQL_USER}:{SQL_PASSWORD}@192.168.86.157:3306/DevBlogDev"


# Production config

class ProductionConfig(Config):
    DEBUG = False
    SQLALCHEMY_ECHO = False
