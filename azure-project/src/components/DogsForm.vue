<template>
    <form id="dogs-form">
        <div class="row">
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Nombre <span class="text-danger">*</span></label>
                <input type="text" class="form-control form-control-lg">
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Raza <span class="text-danger">*</span></label>
                <input type="email" class="form-control form-control-lg">
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Dueño <span class="text-danger">*</span></label>
                <input type="email" class="form-control form-control-lg">
            </div>
            <div class="col-12 form-group">
                <label class="col-form-label col-form-label-lg">Foto <span class="text-danger">*</span></label>
                <input type="email" class="form-control form-control-lg">
            </div>
            <div class="col-12 form-group text-center">
                <button class="btn btn-vue btn-lg col-4">Agregar</button>
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
    background: #53B985;
    color: #31485D;
    font-weight: bold;
}
</style>