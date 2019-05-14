function(doc) {
  if (doc.broadcast && doc.broadcastDay && doc.serviceName) {
    var key = doc.broadcastDay.split(/\D+/).filter(function(c) {
      return c.length
    });
    key.unshift(doc.serviceName);

    emit(key, {
      start: doc.broadcastDay,
      end: doc.broadcastDay,
      broadcasts: 1
    });
  }
}
