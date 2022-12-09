from application.models.exts import db
from datetime import datetime

"""
class devPost(db.Model):
tablename = 'devpost'
id: int
title: str
description: str
link: str
image: blob
created_at: datetime
updated_at: datetime
comments: list
created_by: int
"""


class DevBlogPost(db.Model):
    __tablename__ = 'devpost'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image = db.Column(db.BLOB, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    created_by = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"devPost('{self.title}', '{self.description}', '{self.link}', '{self.created_at}', '{self.updated_at}', '{self.created_by}')"

    def save(self):
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self):
        self.updated_at = datetime.utcnow()
        db.session.commit()


"""
class Comment(db.Model):
tablename = 'comment'
id: int
comment: str
created_at: datetime
updated_at: datetime
created_by: int
devpost_id: int
"""
