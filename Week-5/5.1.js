// /Create 3 functions, for example doTask1(), doTask2() and doTask3(). These three functionsshould be executed sequentially using 
//both Async and Await.Execute these three 3 callback functions asynchronously using Async Await and Generators

async function doTask(taskName){
    return await fetch('http://dev.kuleen.co:8397/' + taskName)
}

async function* fetchTask() {
    for(i=1; i<4; i++){
        const response = await doTask('Task' + i.toString());
        yield await response.text();
    }
  }
  
   const it = fetchTask();
  
  it.next().then(({ value, done }) => {
        var Index = value.charAt(value.length - 1).toString();
        doTask1(parseInt(Index));
  })

  it.next().then(({ value, done }) => {
        var Index = value.charAt(value.length - 1).toString();
        doTask2(parseInt(Index));
  })

  it.next().then(({ value, done }) => {
        var Index = value.charAt(value.length - 1).toString();
        doTask3(parseInt(Index));
  })

  function doTask1(PARAM){
    console.log('Result achieved by Task-1: ' + (PARAM + PARAM).toString());
  }

  function doTask2(PARAM){
    console.log('Result achieved by Task-2: ' + (PARAM / PARAM + PARAM).toString());
  }

  function doTask3(PARAM){
    console.log('Result achieved by Task-3: ' + (PARAM * PARAM).toString());
  }

  