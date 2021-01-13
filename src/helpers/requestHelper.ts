export default class RequestHelper {

  public static buildQueryFilter(filters: any): string {
    if (typeof (filters) === 'string') return filters;
    var query = [];
    for (var key in filters) {
      if (filters.hasOwnProperty(key)) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(filters[key]));
      }
    }
    return query.join('&');
  }

}
