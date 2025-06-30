# Note:

- Run postgres pod before run backend-pod

## Config to use image local

eval $(minikube docker-env)

kubectl config set-context --current --namespace=kube

## Build again image

docker build -t simple-web-app-backend:local .

## Deploy the backend service

kubectl apply -f backend-pod.yml
kubectl apply -f backend-service.yml
kubectl apply -f backend-deployment.yml

### Setting up Ingress

```bash
# Enable ingress addon
minikube addons enable ingress

# Apply ingress configuration
kubectl apply -f simple-web-app-ingress.yml

# Get Minikube IP
minikube ip

# Add entry to hosts file
sudo nano /etc/hosts
# Add: 192.168.49.2  simple-web-app.local

# Verify ingress status
kubectl get ingress
kubectl describe ingress simple-web-app-ingress

# Access application
# http://simple-web-app.local
```
