@RestResource(urlMapping='/hello/*')
global class Hello {
  @HttpGet
  global static void get() {
    RestRequest req = RestContext.request;
    RestResponse res = Restcontext.response;

    String name = req.params.get('name');
    if (! String.isNotBlank(name)) {
      name = 'Stranger';
    }

    res.responseBody = Blob.valueOf('Hello ' + name);
  }
}