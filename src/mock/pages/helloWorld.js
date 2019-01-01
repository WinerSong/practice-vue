import Mock from 'mockjs';
import ApiPath from '../apiPath';

export default Mock.mock(ApiPath.helloWorld.path,ApiPath.helloWorld.type,{
  "success": true,
  "data": {
    "name": "hello world"
  }
});
