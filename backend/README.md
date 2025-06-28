# login

login into pgadmin with username: admin@admin.com and password: mypwd
docker build -t trialz0d1xq.jfrog.io/docker-example-docker simple-web-app-backend:latest ./backend

# push

docker push trialz0d1xq.jfrog.io/docker-example-docker/simple-web-app-backend:latest

# Build the backend image

docker build -t simple-web-app-backend:local ./backend

# Cấu hình để sử dụng Docker daemon của Minikube

eval $(minikube docker-env)

# Build lại image (bây giờ sẽ được lưu trong Docker daemon của Minikube)

docker build -t simple-web-app-backend:local ./backend

# Deploy the backend service

kubectl apply -f backend-pod.yml
kubectl apply -f backend-service.yml
kubectl apply -f backend-deployment.yml

# Update the ingress

kubectl apply -f simple-web-app-ingress.yml
