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
                this.muebles = respuesta.data;
                console.log(respuesta);
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