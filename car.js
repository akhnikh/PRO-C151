AFRAME.registerComponent("carmodel",{
    schema: {
        images: {type: 'string', default: 'scene.gltf'}
    },
    init: function(){
        this.el.setAttribute('rotation', {x: 0, y: -100, z:0})
        this.el.setAttribute('posiiton', {x: 0, y: 50, z: 80})
        this.el.setAttribute('gltf-model', this.data.images)
    } 
})