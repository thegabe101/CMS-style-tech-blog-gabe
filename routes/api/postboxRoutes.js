//post routes will be somewhat similar to userroutes.
//There will be a few differences.
//1: we need to require all models, as posts belong to users and have comments
//2: we need an authorization function, which we have boilerplate from the project. this is a middleware that checks to see a user is logged in before allowing a certain route action
//3: will be heavily reliant on the associations in our models, so if those aren't correct (though I simplified them), nothing here will work. 