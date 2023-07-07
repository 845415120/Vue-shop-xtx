import instance from '@/util/request'

export const findAllCategory = () => {
  return instance('/home/category/head', 'get')
}
