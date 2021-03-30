function update() {
    var date = new Date();
    var utc8DiffMinutes = date.getTimezoneOffset() + 480;
    date.setMinutes(date.getMinutes() + utc8DiffMinutes);
    
    var timeString =
      date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2);

    var dateString = date.getMonth() + 1 + "." + date.getDate();
    var weekList = [
      "SUN",
      "MON",
      "TUE",
      "WED",
      "THU",
      "FRI",
      "SAT",
    ];
    var weekString = weekList[date.getDay()];

    document.getElementById("time").innerHTML = timeString;
    document.getElementById("date").innerHTML = dateString + " | " + weekString;
  }

