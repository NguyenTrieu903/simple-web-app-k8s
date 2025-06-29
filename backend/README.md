### Note:

- Run postgres pod before run backend-pod

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
