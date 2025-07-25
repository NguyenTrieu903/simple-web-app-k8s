# Simple Two-Page Web Application

This is a simple two-page web application that collects username and password on the first page and displays them on the second page.

## Running the Application

### Without Docker

Simply open `index.html` in a web browser.

### With Docker

#### Building and Running Locally

#### Note: Run

```bash
eval $(minikube docker-env)
```

before build docker iamge

1. Build the Docker image:

   ```bash
   docker build -t simple-web-app:local .
   ```

2. Run the Docker container:

   ```bash
   docker run -d -p 8080:80 simple-web-app
   ```

3. Access the application in your browser at: `http://localhost:8080`

### Using JFrog Registry

#### Authentication

```bash
docker login -unguyentrieutptp@gmail.com trialz0d1xq.jfrog.io
```

#### Build & Push Image

```bash
# Build with registry tag
docker build -t trialz0d1xq.jfrog.io/docker-example-docker/simple-web-app .

# Push to registry
docker push trialz0d1xq.jfrog.io/docker-example-docker/simple-web-app
```

#### Pull Image

```bash
docker pull trialz0d1xq.jfrog.io/docker-example-docker-local/simple-web-app:latest
```

## Kubernetes Deployment

### Setup Minikube

```bash
minikube delete
minikube start --driver=docker or minikube start --driver=docker --wait=all
```

#### Config to use image local and create namespace first

```bash
eval $(minikube docker-env)
kubectl create namespace kube
kubectl config set-context --current --namespace=kube
```

### Registry Credentials

```bash
kubectl create secret docker-registry jfrog-regcred \
  --docker-server=trialz0d1xq.jfrog.io \
  --docker-username=<your-username> \
  --docker-password=<your-password> \
  --docker-email=<your-email>
# Example:
kubectl create secret docker-registry jfrog-regcred \
  --docker-server=trialz0d1xq.jfrog.io \
  --docker-username=nguyentrieutptp@gmail.com \
  --docker-password=<your_password> \
  --docker-email=nguyentrieutptp@gmail.com
```

### Deploying as a Pod

```bash
kubectl apply -f simple-web-app-pod.yml
kubectl describe pod simple-web-app-pod
kubectl port-forward pod/simple-web-app-pod 8080:80
kubectl get pods -o wide
kubectl logs simple-web-app-pod
```

### Deploying with Deployment

```bash
kubectl apply -f simple-web-app-deployment.yml
kubectl get deployments
kubectl get pods
kubectl describe deployment simple-web-app-deployment
kubectl expose deployment simple-web-app-deployment \
  --type=NodePort \
  --port=8080 \
  --target-port=80
minikube service simple-web-app-deployment -n kube
```

### Creating a Service

```bash
kubectl apply -f simple-web-app-service.yml
kubectl describe svc simple-web-app-service
```
