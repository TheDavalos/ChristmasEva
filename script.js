/** @type {HTMLCanvasElement} */
window.addEventListener('load', function () {
    const greeting1 = document.getElementById('greeting1')
    const greeting2 = document.getElementById('greeting2')
    const greeting3 = document.getElementById('greeting3')

    const events = document.getElementById('events')
    const schContainer = document.querySelector('.schContainer')
    
    const eats = document.getElementById('eats')
    const foodMenuContainer = document.querySelector('.foodMenuContainer')

    const snowing1Canvas = document.getElementById('snowing1')
    snowing1Canvas.width = window.innerWidth
    snowing1Canvas.height = window.innerHeight
    const snowing1Ctx = snowing1Canvas.getContext('2d') 
    let snowArray1 = []
    
    const snowing2Canvas = document.getElementById('snowing2')
    snowing2Canvas.width = window.innerWidth
    snowing2Canvas.height = window.innerHeight
    const snowing2Ctx = snowing2Canvas.getContext('2d') 
    let snowArray2 = []
    
    const snowing3Canvas = document.getElementById('snowing3')
    snowing3Canvas.width = window.innerWidth
    snowing3Canvas.height = window.innerHeight
    const snowing3Ctx = snowing3Canvas.getContext('2d') 
    let snowArray3 = []
    
    const snowing4Canvas = document.getElementById('snowing4')
    snowing4Canvas.width = window.innerWidth
    snowing4Canvas.height = window.innerHeight 
    const snowing4Ctx = snowing4Canvas.getContext('2d')
    let snowArray4 = []
    
    const snowing5Canvas = document.getElementById('snowing5')
    snowing5Canvas.width = window.innerWidth
    snowing5Canvas.height = window.innerHeight
    const snowing5Ctx = snowing5Canvas.getContext('2d') 
    let snowArray5 = []
    
    const snowing6Canvas = document.getElementById('snowing6')
    snowing6Canvas.width = window.innerWidth
    snowing6Canvas.height = window.innerHeight
    const snowing6Ctx = snowing6Canvas.getContext('2d') 
    let snowArray6 = []
    
    const snowing7Canvas = document.getElementById('snowing7')
    snowing7Canvas.width = window.innerWidth
    snowing7Canvas.height = window.innerHeight
    const snowing7Ctx = snowing7Canvas.getContext('2d') 
    let snowArray7 = []
    
    const snowing8Canvas = document.getElementById('snowing8')
    snowing8Canvas.width = window.innerWidth
    snowing8Canvas.height = window.innerHeight
    const snowing8Ctx = snowing8Canvas.getContext('2d') 
    let snowArray8 = []
    
    const snowing9Canvas = document.getElementById('snowing9')
    snowing9Canvas.width = window.innerWidth
    snowing9Canvas.height = window.innerHeight
    const snowing9Ctx = snowing9Canvas.getContext('2d') 
    let snowArray9 = []
    
    const snowing10Canvas = document.getElementById('snowing10')
    snowing10Canvas.width = window.innerWidth
    snowing10Canvas.height = window.innerHeight 
    const snowing10Ctx = snowing10Canvas.getContext('2d')
    let snowArray10 = []
    
    const snowing11Canvas = document.getElementById('snowing11')
    snowing11Canvas.width = window.innerWidth
    snowing11Canvas.height = window.innerHeight
    const snowing11Ctx = snowing11Canvas.getContext('2d') 
    let snowArray11 = []
    
    const snowing12Canvas = document.getElementById('snowing12')
    snowing12Canvas.width = window.innerWidth
    snowing12Canvas.height = window.innerHeight
    const snowing12Ctx = snowing12Canvas.getContext('2d') 
    let snowArray12 = []
    
    const snowing13Canvas = document.getElementById('snowing13')
    snowing13Canvas.width = window.innerWidth
    snowing13Canvas.height = window.innerHeight
    const snowing13Ctx = snowing13Canvas.getContext('2d') 
    let snowArray13 = []
    
    const snowing14Canvas = document.getElementById('snowing14')
    snowing14Canvas.width = window.innerWidth
    snowing14Canvas.height = window.innerHeight
    const snowing14Ctx = snowing14Canvas.getContext('2d') 
    let snowArray14 = []
    
    const snowing15Canvas = document.getElementById('snowing15')
    snowing15Canvas.width = window.innerWidth
    snowing15Canvas.height = window.innerHeight
    const snowing15Ctx = snowing15Canvas.getContext('2d') 
    let snowArray15 = []
    
    const snowing16Canvas = document.getElementById('snowing16')
    snowing16Canvas.width = window.innerWidth
    snowing16Canvas.height = window.innerHeight 
    const snowing16Ctx = snowing16Canvas.getContext('2d')
    let snowArray16 = []
    
    const snowing17Canvas = document.getElementById('snowing17')
    snowing17Canvas.width = window.innerWidth
    snowing17Canvas.height = window.innerHeight
    const snowing17Ctx = snowing17Canvas.getContext('2d') 
    let snowArray17 = []
    
    const snowing18Canvas = document.getElementById('snowing18')
    snowing18Canvas.width = window.innerWidth
    snowing18Canvas.height = window.innerHeight
    const snowing18Ctx = snowing18Canvas.getContext('2d') 
    let snowArray18 = []
    
    const snowing19Canvas = document.getElementById('snowing19')
    snowing19Canvas.width = window.innerWidth
    snowing19Canvas.height = window.innerHeight 
    const snowing19Ctx = snowing19Canvas.getContext('2d')
    let snowArray19 = []
    
    const snowing20Canvas = document.getElementById('snowing20')
    snowing20Canvas.width = window.innerWidth
    snowing20Canvas.height = window.innerHeight
    const snowing20Ctx = snowing20Canvas.getContext('2d') 
    let snowArray20 = []
    
    const snowing21Canvas = document.getElementById('snowing21')
    snowing21Canvas.width = window.innerWidth
    snowing21Canvas.height = window.innerHeight
    const snowing21Ctx = snowing21Canvas.getContext('2d') 
    let snowArray21 = []

    greeting1.addEventListener("click", () => {
        foodMenuContainer.classList.add("displayNone")
        schContainer.classList.add("displayNone")
        greeting2.classList.remove("displayNone")
        greeting3.classList.remove("displayNone")
    }) 

    events.addEventListener("click", () => {
        foodMenuContainer.classList.add("displayNone")
        schContainer.classList.toggle("displayNone")
        if (schContainer.classList[1] === 'displayNone') {
            greeting2.classList.remove("displayNone")
            greeting3.classList.remove("displayNone")
        } else {
            greeting2.classList.add("displayNone")
            greeting3.classList.add("displayNone")
        }
    }) 

    eats.addEventListener("click", () => {
        schContainer.classList.add("displayNone")
        foodMenuContainer.classList.toggle("displayNone")
        if (foodMenuContainer.classList[1] === 'displayNone') {
            greeting2.classList.remove("displayNone")
            greeting3.classList.remove("displayNone")
        } else {
            greeting2.classList.add("displayNone")
            greeting3.classList.add("displayNone")
        }
    }) 
        
    class SnowToBottom1 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing1Canvas.width*2 - (snowing1Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1 
            this.color = 'snow'
            this.shouldBeDeleted = false
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing1Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing1Ctx.beginPath()
            snowing1Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing1Ctx.fillStyle = this.color
            snowing1Ctx.fill()
        }
    }

    class SnowToBottom2 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing2Canvas.width*2 - (snowing2Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1 
            this.color = 'snow'
            this.shouldBeDeleted = false
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing2Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing2Ctx.beginPath()
            snowing2Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing2Ctx.fillStyle = this.color
            snowing2Ctx.fill()
        }
    }

    class SnowToBottom3 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing3Canvas.width*2 - (snowing3Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1 
            this.color = 'snow'
            this.shouldBeDeleted = false
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing3Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing3Ctx.beginPath()
            snowing3Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing3Ctx.fillStyle = this.color
            snowing3Ctx.fill()
        }
    }

    class SnowToBottom4 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing4Canvas.width*2 - (snowing4Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1 
            this.color = 'snow'
            this.shouldBeDeleted = false
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing4Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing4Ctx.beginPath()
            snowing4Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing4Ctx.fillStyle = this.color
            snowing4Ctx.fill()
        }
    }

    class SnowToBottom5 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing5Canvas.width*2 - (snowing5Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1 
            this.color = 'snow'
            this.shouldBeDeleted = false
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing5Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing5Ctx.beginPath()
            snowing5Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing5Ctx.fillStyle = this.color
            snowing5Ctx.fill()
        }
    }

    class SnowToBottom6 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing6Canvas.width*2 - (snowing6Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing6Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing6Ctx.beginPath()
            snowing6Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing6Ctx.fillStyle = this.color
            snowing6Ctx.fill()
        }
    }

    class SnowToBottom7 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing7Canvas.width*2 - (snowing7Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing7Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing7Ctx.beginPath()
            snowing7Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing7Ctx.fillStyle = this.color
            snowing7Ctx.fill()
        }
    }

    class SnowToBottom8 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing8Canvas.width*2 - (snowing8Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing8Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing8Ctx.beginPath()
            snowing8Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing8Ctx.fillStyle = this.color
            snowing8Ctx.fill()
        }
    }

    class SnowToBottom9 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing9Canvas.width*2 - (snowing9Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing9Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing9Ctx.beginPath()
            snowing9Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing9Ctx.fillStyle = this.color
            snowing9Ctx.fill()
        }
    }

    class SnowToBottom10 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing10Canvas.width*2 - (snowing10Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing10Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing10Ctx.beginPath()
            snowing10Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing10Ctx.fillStyle = this.color
            snowing10Ctx.fill()
        }
    }

    class SnowToBottom11 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing11Canvas.width*2 - (snowing11Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing11Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing11Ctx.beginPath()
            snowing11Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing11Ctx.fillStyle = this.color
            snowing11Ctx.fill()
        }
    }

    class SnowToBottom12 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing12Canvas.width*2 - (snowing12Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing12Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing12Ctx.beginPath()
            snowing12Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing12Ctx.fillStyle = this.color
            snowing12Ctx.fill()
        }
    }

    class SnowToBottom13 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing13Canvas.width*2 - (snowing13Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing13Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing13Ctx.beginPath()
            snowing13Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing13Ctx.fillStyle = this.color
            snowing13Ctx.fill()
        }
    }

    class SnowToBottom14 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing14Canvas.width*2 - (snowing14Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing14Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing14Ctx.beginPath()
            snowing14Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing14Ctx.fillStyle = this.color
            snowing14Ctx.fill()
        }
    }

    class SnowToBottom15 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing15Canvas.width*2 - (snowing15Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing15Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing15Ctx.beginPath()
            snowing15Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing15Ctx.fillStyle = this.color
            snowing15Ctx.fill()
        }
    }

    class SnowToBottom16 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing16Canvas.width*2 - (snowing16Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing16Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing16Ctx.beginPath()
            snowing16Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing16Ctx.fillStyle = this.color
            snowing16Ctx.fill()
        }
    }

    class SnowToBottom17 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing17Canvas.width*2 - (snowing17Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing17Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing17Ctx.beginPath()
            snowing17Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing17Ctx.fillStyle = this.color
            snowing17Ctx.fill()
        }
    }

    class SnowToBottom18 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing18Canvas.width*2 - (snowing18Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing18Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing18Ctx.beginPath()
            snowing18Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing18Ctx.fillStyle = this.color
            snowing18Ctx.fill()
        }
    }

    class SnowToBottom19 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing19Canvas.width*2 - (snowing19Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing19Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing19Ctx.beginPath()
            snowing19Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing19Ctx.fillStyle = this.color
            snowing19Ctx.fill()
        }
    }

    class SnowToBottom20 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing20Canvas.width*2 - (snowing20Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing20Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing20Ctx.beginPath()
            snowing20Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing20Ctx.fillStyle = this.color
            snowing20Ctx.fill()
        }
    }

    class SnowToBottom21 {
        constructor(){
            this.size = Math.random() * 1.35 + .5
            this.x = Math.random() * snowing21Canvas.width*2 - (snowing21Canvas.width*.5)
            this.y = -this.size
            this.weight = 2 - (this.size - 2)
            this.directionX = 1
            this.flakeShape = Math.random() * 1 + .1
            this.color = 'snow'
            this.shouldBeDeleted = false 
        }
        update(){
            this.y += this.weight
            this.x += this.directionX
            if (this.y > snowing21Canvas.height*.9) {
                this.directionX = 0
                this.weight = 0.02
                this.size -= .02
                if (this.size < .1618){
                    this.size = .1618
                    this.color = 'transparent'
                    this.shouldBeDeleted = true
                }
            }
        }
        draw(){
            snowing21Ctx.beginPath()
            snowing21Ctx.arc(this.x, this.y, this.size,0, Math.PI*this.flakeShape)
            snowing21Ctx.fillStyle = this.color
            snowing21Ctx.fill()
        }
    }

    function animate(){
        snowing1Ctx.clearRect(0, 0, snowing1Canvas.width, snowing1Canvas.height)
        snowing2Ctx.clearRect(0, 0, snowing2Canvas.width, snowing2Canvas.height)
        snowing3Ctx.clearRect(0, 0, snowing3Canvas.width, snowing3Canvas.height)
        snowing4Ctx.clearRect(0, 0, snowing4Canvas.width, snowing4Canvas.height)
        snowing5Ctx.clearRect(0, 0, snowing5Canvas.width, snowing5Canvas.height)
        snowing6Ctx.clearRect(0, 0, snowing6Canvas.width, snowing6Canvas.height)
        snowing7Ctx.clearRect(0, 0, snowing7Canvas.width, snowing7Canvas.height)
        snowing8Ctx.clearRect(0, 0, snowing8Canvas.width, snowing8Canvas.height)
        snowing9Ctx.clearRect(0, 0, snowing9Canvas.width, snowing9Canvas.height)
        snowing10Ctx.clearRect(0, 0, snowing10Canvas.width, snowing10Canvas.height)
        snowing11Ctx.clearRect(0, 0, snowing11Canvas.width, snowing11Canvas.height)
        snowing12Ctx.clearRect(0, 0, snowing12Canvas.width, snowing12Canvas.height)
        snowing13Ctx.clearRect(0, 0, snowing13Canvas.width, snowing13Canvas.height)
        snowing14Ctx.clearRect(0, 0, snowing14Canvas.width, snowing14Canvas.height)
        snowing15Ctx.clearRect(0, 0, snowing15Canvas.width, snowing15Canvas.height)
        snowing16Ctx.clearRect(0, 0, snowing16Canvas.width, snowing16Canvas.height)
        snowing17Ctx.clearRect(0, 0, snowing17Canvas.width, snowing17Canvas.height)
        snowing18Ctx.clearRect(0, 0, snowing18Canvas.width, snowing18Canvas.height)
        snowing19Ctx.clearRect(0, 0, snowing19Canvas.width, snowing19Canvas.height)
        snowing20Ctx.clearRect(0, 0, snowing20Canvas.width, snowing20Canvas.height)
        snowing21Ctx.clearRect(0, 0, snowing21Canvas.width, snowing21Canvas.height)
        snowArray1.forEach(snow1 => {
            snow1.update()
            snow1.draw()
        })
        snowArray2.forEach(snow2 => {
            snow2.update()
            snow2.draw()
        })
        snowArray3.forEach(snow3 => {
            snow3.update()
            snow3.draw()
        })
        snowArray4.forEach(snow4 => {
            snow4.update()
            snow4.draw()
        })
        snowArray5.forEach(snow5 => {
            snow5.update()
            snow5.draw()
        })
        snowArray6.forEach(snow6 => {
            snow6.update()
            snow6.draw()
        })
        snowArray7.forEach(snow7 => {
            snow7.update()
            snow7.draw()
        })
        snowArray8.forEach(snow8 => {
            snow8.update()
            snow8.draw()
        })
        snowArray9.forEach(snow9 => {
            snow9.update()
            snow9.draw()
        })
        snowArray10.forEach(snow10 => {
            snow10.update()
            snow10.draw()
        })
        snowArray11.forEach(snow11 => {
            snow11.update()
            snow11.draw()
        })
        snowArray12.forEach(snow12 => {
            snow12.update()
            snow12.draw()
        })
        snowArray13.forEach(snow13 => {
            snow13.update()
            snow13.draw()
        })
        snowArray14.forEach(snow14 => {
            snow14.update()
            snow14.draw()
        })
        snowArray15.forEach(snow15 => {
            snow15.update()
            snow15.draw()
        })
        snowArray16.forEach(snow16 => {
            snow16.update()
            snow16.draw()
        })
        snowArray17.forEach(snow17 => {
            snow17.update()
            snow17.draw()
        })
        snowArray18.forEach(snow18 => {
            snow18.update()
            snow18.draw()
        })
        snowArray19.forEach(snow19 => {
            snow19.update()
            snow19.draw()
        })
        snowArray20.forEach(snow20 => {
            snow20.update()
            snow20.draw()
        })
        snowArray21.forEach(snow21 => {
            snow21.update()
            snow21.draw()
        })
        snowArray1.push(new SnowToBottom1())
        snowArray2.push(new SnowToBottom2())
        snowArray3.push(new SnowToBottom3())
        snowArray4.push(new SnowToBottom4())
        snowArray5.push(new SnowToBottom5())
        snowArray6.push(new SnowToBottom6())
        snowArray7.push(new SnowToBottom7())
        snowArray8.push(new SnowToBottom8())
        snowArray9.push(new SnowToBottom9())
        snowArray10.push(new SnowToBottom10())
        snowArray11.push(new SnowToBottom11())
        snowArray12.push(new SnowToBottom12())
        snowArray13.push(new SnowToBottom13())
        snowArray14.push(new SnowToBottom14())
        snowArray15.push(new SnowToBottom15())
        snowArray16.push(new SnowToBottom16())
        snowArray17.push(new SnowToBottom17())
        snowArray18.push(new SnowToBottom18())
        snowArray19.push(new SnowToBottom19())
        snowArray20.push(new SnowToBottom20())
        snowArray21.push(new SnowToBottom21())
        snowArray1 = snowArray1.filter(object => !object.shouldBeDeleted)
        snowArray2 = snowArray2.filter(object => !object.shouldBeDeleted)
        snowArray3 = snowArray3.filter(object => !object.shouldBeDeleted)
        snowArray4 = snowArray4.filter(object => !object.shouldBeDeleted)
        snowArray5 = snowArray5.filter(object => !object.shouldBeDeleted)
        snowArray6 = snowArray6.filter(object => !object.shouldBeDeleted)
        snowArray7 = snowArray7.filter(object => !object.shouldBeDeleted)
        snowArray8 = snowArray8.filter(object => !object.shouldBeDeleted)
        snowArray9 = snowArray9.filter(object => !object.shouldBeDeleted)
        snowArray10 = snowArray10.filter(object => !object.shouldBeDeleted)
        snowArray11 = snowArray11.filter(object => !object.shouldBeDeleted)
        snowArray12 = snowArray12.filter(object => !object.shouldBeDeleted)
        snowArray13 = snowArray13.filter(object => !object.shouldBeDeleted)
        snowArray14 = snowArray14.filter(object => !object.shouldBeDeleted)
        snowArray15 = snowArray15.filter(object => !object.shouldBeDeleted)
        snowArray16 = snowArray16.filter(object => !object.shouldBeDeleted)
        snowArray17 = snowArray17.filter(object => !object.shouldBeDeleted)
        snowArray18 = snowArray18.filter(object => !object.shouldBeDeleted)
        snowArray19 = snowArray19.filter(object => !object.shouldBeDeleted)
        snowArray20 = snowArray20.filter(object => !object.shouldBeDeleted)
        snowArray21 = snowArray21.filter(object => !object.shouldBeDeleted)
        requestAnimationFrame(animate)
    }
    animate()
    let countDownDate = new Date("Dec 24, 2023 10:00:00").getTime();
    setInterval(function() {
        let now = new Date().getTime()
        let distance = countDownDate - now
        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)
        const displayArray = [days + "d " + hours + "h " + minutes + "m " + seconds + "s ", "Christmas Eva 2023 started " + ((days-days*2)-1) + "d " + ((hours-hours*2)-1) + "h " + ((minutes-minutes*2)-1) + "m " + ((seconds-seconds*2)-1) + "s ago!", "Merry Christmas!! Christmas Eva 2023 started " + ((days-days*2)-1) + "d " + ((hours-hours*2)-1) + "h " + ((minutes-minutes*2)-1) + "m " + ((seconds-seconds*2)-1) + "s ago!" , "Christmas Eva 2023 started " + ((days-days*2)-1) + "d " + ((hours-hours*2)-1) + "h " + ((minutes-minutes*2)-1) + "m " + ((seconds-seconds*2)-1) + "s ago!"]
        let displayArrayIndex = 0
        if (distance < 0) {
            displayArrayIndex = 1
        }
        if (displayArrayIndex === 1 && days <= 0 && hours < -15) {
            displayArrayIndex = 2
        } 
    document.getElementById("countDownToXmasEva2023").innerHTML = displayArray[displayArrayIndex] 
    })
  
})