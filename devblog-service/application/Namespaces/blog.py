from flask_restx import Namespace, Resource, fields
from datetime import datetime
from flask import request

blog_ns = Namespace('blog', description='Blog related operations', path='/api/v1/dev-blog')

blog_model = blog_ns.model(
    'DevBlogPost',
    {
        'title': fields.String(required=True, description='The blog title'),
        'description': fields.String(required=True, description='The blog description'),
        'image': fields.String(required=False, description='The blog image'),
        'created_by': fields.Integer(required=True, description='The blog creator id')
    }
)


@blog_ns.route('/api/v1/dev-blog')
class DevBlogPost(Resource):
    @blog_ns.marshal_with(blog_model)
    def get(self):
        """
        Get all blog posts
        :return:
        """
        posts = DevBlogPost.query.all()

        return posts

    @blog_ns.expect(blog_model)
    @blog_ns.marshal_with(blog_model, code=201)
    def post(self):
        """
        Create a new blog post
        :return:
        """
        data = request.get_json()
        new_devblogpost = DevBlogPost(
            title=data['title'],
            description=data['description'],
            image=data['image'],
            created_by=data['created_by']
        )

        new_devblogpost.save()

        return {'message': 'Blog post created successfully'}, 201


@blog_ns.route('/api/v1/dev-blog/<int:id>')
class DevBlogPost(Resource):
    @blog_ns.marshal_with(blog_model)
    def get(self, id):
        """
            Get a single blog post
            :param id:
            :return:
            """
        post = DevBlogPost.query.get_or_404(id)

        return post

    @blog_ns.marshal_with(blog_model)
    def put(self, id):
        """
            Update a single blog post
            :param id:
            :return:
        """
        post = DevBlogPost.query.get_or_404(id)
        new_data = request.get_json()

        updated_post = DevBlogPost(
            title=new_data['title'],
            description=new_data['description'],
            image=new_data['image'],
            created_at=post.created_at,
        )

        updated_post.update()

        return {'message': 'Blog post updated successfully'}, 201

    @blog_ns.marshal_with(blog_model)
    def delete(self, id):
        """
            Delete a single blog post
            :param id:
            :return:
            """
        post = DevBlogPost.query.get_or_404(id)
        post.delete()

        return {'message': 'Blog post deleted successfully'}, 201
