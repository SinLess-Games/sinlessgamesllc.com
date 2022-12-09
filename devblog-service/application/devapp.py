from flask import Flask
from flask_restx import Api
from flask_migrate import Migrate
from models.exts import db
from models.models import DevBlogPost
from config import DevelopmentConfig

app = Flask(__name__)

api = Api(
    app,
    version='1.0',
    title='Dev Blog Api',
    description='The api service for SinLess Games Dev Blog',
    doc='/api/v1/dev-blog/docs'
)

app.config.from_object(DevelopmentConfig)

db.init_app(app)
migrate = Migrate(app, db)


# ADD NAMESPACES HERE

# CREATE CONTEXT SHELL
@app.shell_context_processor
def make_shell_context():
    return {
        'db': db,
        'DevBlogPost': DevBlogPost,
    }


if __name__ == '__main__':
    app.run(debug=DevelopmentConfig.DEBUG, port=DevelopmentConfig.PORT, ssl_context=('Certificates/public.pem', 'Certificates/priv.key'))
