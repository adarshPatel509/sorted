chrome.storage.sync.get(["sorted_status"], (value) => {
  if(value.sorted_status === undefined || value.sorted_status === "enabled") {
    let itemList = $("div.freebirdFormviewerViewItemList");
    itemList.find("div.freebirdFormviewerViewNumberedItemContainer")
      .sort((item1, item2) => {
        let heading1 = $(item1).find("div.freebirdFormviewerComponentsQuestionBaseTitle").text().trim().toLowerCase();
        let heading2 = $(item2).find("div.freebirdFormviewerComponentsQuestionBaseTitle").text().trim().toLowerCase();
        return String.prototype.localeCompare.call(heading1, heading2);
      })
      .appendTo(itemList);
    
    if(value.sorted_status === undefined) {
      chrome.storage.sync.set({"sorted_status": "enabled"}, () => {
        console.log("Sorted chrome extension is enabled!");
      });
    }
 }
});