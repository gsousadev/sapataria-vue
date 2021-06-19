export default class RequestHelper {

 static buildQueryFilter(filters) {
    if (typeof (filters) === 'string') return filters;
    var query = [];
    for (var key in filters) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(filters[key]));
    }
    return query.join('&');
  }
}
