// model/Post.js
import { Model } from '@nozbe/watermelondb'

export default class PostProject extends Model {
  static table = 'post_projects'
  static associations = {
    comments: { type: 'has_many', foreignKey: 'project_id' },
  }
}

export class PostModule extends Model {
  static table = 'modules'
  static associations = {
    posts: { type: 'belongs_to', key: 'project_id' },
  }
}