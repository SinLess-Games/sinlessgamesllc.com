from flask import Flask
from flask_restx import Api
from flask_migrate import Migrate

from application.models.exts import db
from application.models.models import DevBlogPost
from application.Namespaces.blog import blog_ns


def create_app(config):

    app = Flask(__name__)

    api = Api(
        app,
        version='1.0',
        title='Dev Blog Api',
        description='The api service for SinLess Games Dev Blog',
        doc='/api/v1/dev-blog/docs'
    )

    app.config.from_object(config)

    db.init_app(app)
    migrate = Migrate(app, db)

    # ADD NAMESPACES HERE
    api.add_namespace(blog_ns)

    # CREATE CONTEXT SHELL
    @app.shell_context_processor
    def make_shell_context():
        return {
            'db': db,
            'DevBlogPost': DevBlogPost
        }

    return app
