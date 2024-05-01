export default function getListStudentIds(objects) {
  if (objects instanceof Array) {
    return objects.map((object) => object.id);
  }
  return [];
}
