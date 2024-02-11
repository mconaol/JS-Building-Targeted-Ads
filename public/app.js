                                                             
async function getCoords(){
    let pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

console.log(getCoords());                              


// get user's time                                                            
function userTime(){
    const now = new Date()
    return now.getHours()
}
                                                              
function getMealTime(){
    const tod = userTime()
    
    if (tod > 20) {return 'late-night snack'}
    else if (tod > 16) {
        return 'dinner'}
    else if (tod > 11) {
        return 'lunch'}
    else {
        return 'breakfast'}
}

                                                         
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}
buildAd1()                                                          

// Build Ad 2                                                             
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}                                                             
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}
