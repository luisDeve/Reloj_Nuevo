window.addEventListener('load',()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            let longitud=posicion.coords.longitude;
            let latitud=posicion.coords.latitude
            let key= "a5108d07826be212e080fb7e876d292b"
            const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${key}`
            fetch(url)
            .then(res=>res.json())
            .then(lugarMostrarDatos=>{
                mostrarClima(lugarMostrarDatos)
                
            })
            console.log(url)
        })
    }
    
    function mostrarClima(lugarMostrarDatos){
        console.log(lugarMostrarDatos)
        let temperaturaKelvin = lugarMostrarDatos.main.temp
        let temperaturaFinal=Math.round(temperaturaKelvin-273.15);
        let temperaturaMax=lugarMostrarDatos.main.temp_max
        let temperaturaMaxfinal=Math.round(temperaturaMax-273.15)
        let temperaturaMin=lugarMostrarDatos.main.temp_min
        let temperaturaMinfinal=Math.round(temperaturaMin-273.15)
        let elemento =""
    
            elemento +=`
            <tr>
            <td>${temperaturaFinal} °C</td>
            <td>${temperaturaMaxfinal} °C</td>
            <td>${temperaturaMinfinal} °C</td>
          </tr>`
        
        document.getElementById('clima').innerHTML=elemento
    }
})
