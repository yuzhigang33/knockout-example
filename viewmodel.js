function Test(){
  self = this;
  self.firstName = ko.observable("aaaaaaaa");
  self.lastName = ko.observable("bbbbbbbbb");

  self.fullName = ko.computed(function(){
    return self.firstName() + " " + self.lastName();
  });
}


ko.applyBindings(new Test());
