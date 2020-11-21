chrome.storage.sync.get(["sorted_status"], (value) => {
  if(value.sorted_status === undefined) {
    chrome.storage.sync.set({"sorted_status": "enabled"}, () => {
      console.log("Sorted chrome extension is enabled!");
    });
  } else {
    if(value.sorted_status === "enabled") {
      $("#enabled").css("background-color", "#7935b1");
      $("#disabled").css("background-color", "#5CDB95");
    } else {
      $("#disabled").css("background-color", "#7935b1");
      $("#enabled").css("background-color", "#5CDB95");
    }
  }
});


$("#enabled").click(e => {
 $("#enabled").css("background-color", "#7935b1");
 $("#disabled").css("background-color", "#5CDB95");
 chrome.storage.sync.set({"sorted_status": "enabled"}, () => {
   console.log("Sorted chrome extension is enabled!");
 });
});

$("#disabled").click(e => {
  $("#disabled").css("background-color", "#7935b1");
  $("#enabled").css("background-color", "#5CDB95");
  chrome.storage.sync.set({"sorted_status": "disabled"}, () => {
    console.log("Sorted chrome extension is disabled!");
  });
});