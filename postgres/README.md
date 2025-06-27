# run postgres and pgadmin with kubenetes

kubectl apply -f postgres-secret.yaml
kubectl apply -f postgres-configmap.yml
kubectl apply -f postgres-deploy.yml
kubectl apply -f pgadmin-secret.yml
kubectl apply -f pgadmin-deploy.yml

# login

login into pgadmin with username: admin@admin.com and password: mypwd
docker build -t trialz0d1xq.jfrog.io/docker-example-docker simple-web-app-backend:latest ./backend

# push

docker push trialz0d1xq.jfrog.io/docker-example-docker/simple-web-app-backend:latest

# Build the backend image

docker build -t simple-web-app-backend:latest ./backend

# Deploy the backend service

kubectl apply -f backend/backend-deployment.yml

# Update the ingress

kubectl apply -f simple-web-app-ingress.yml
