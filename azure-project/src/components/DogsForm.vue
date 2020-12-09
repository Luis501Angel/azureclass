<template>
    <form id="dogs-form">
        <div class="row">
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Nombre</label>
                <input type="text" class="form-control form-control-md">
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Raza</label>
                <input type="email" class="form-control form-control-md">
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Dueño</label>
                <input type="email" class="form-control form-control-md">
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Foto</label>
                <input type="email" class="form-control form-control-md">
            </div>
            <label class="col-form-label col-form-label-md"></label>
            <div class="col-12 form-group text-center">
                <button class="btn btn-vue btn-md">Agregar</button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    name: 'SignupForm'
}
</script>
<style>
.btn-vue{
    background: #1976D2;
    color: #FFFFFF;
    font-weight: bold;
}
</style>