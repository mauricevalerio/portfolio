# portfolio
 Maurice's Portfolio

//site logo
//meta tag search
//send message functionality
//scroll effect


h1 {
  font-size: 2.5rem;
  transform: translateY(1em);
  opacity: 0;
}

.basic-animation {
  animation: 2s ease-in-out forwards move-up
}

.first-line-title {
  animation-delay: 0.2s;
}

.second-line-title {
  animation-delay: 0.3s;
}

@keyframes move-up {
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}