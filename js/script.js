const inst = Vue.createApp({
    el:'contenedor',

    mounted(){
        console.log('Instancia creada');
    },

    created(){
        this.llamarMuebles();
    },
    data(){
        return{
            muebles:[ ],
            verMasInfo:''
        }
    },

    methods:{
        llamarMuebles(){
            axios.get("https://www.course-api.com/react-store-products").then(respuesta =>{
                this.muebles = respuesta.data.splice(0,15);
                console.log(respuesta);

                let i=1;
                for(mueble of this.muebles){
                    mueble.cantidad = i;
                    this.muebles.mueble;
                    i=Math.floor(Math.random()*(50-1)+1);
                }
            })
        },
        vermas(mueble) {
            Swal.fire({
                title: 'Información del mueble',
                text: `Compañía: ${mueble.company}`,
                icon: 'info',
                confirmButtonText: 'Salir',
                showCancelButton: false,
                showCloseButton: false
            }).then(() => {
                this.verMasInfo = mueble.company; 
            });
        }
    }
})
const app = inst.mount('#contenedor')