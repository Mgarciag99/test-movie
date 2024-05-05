import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading: boolean = false;
  private loadingDNA: boolean = false;
  private loadingSpiner: boolean = false;
  private loadingSkeleton: boolean = false;
  private loadingSkeletonComponent: boolean = false;
  private loadingSkeletonTableModal: boolean = false;
  constructor() {}

  showLoader() {
    this.loading = true;
  }
  hideLoader() {
    this.loading = false;
  }
  getLoading(): boolean {
    return this.loading;
  }

  showDNALoader() {
    this.loadingDNA = true;
  }
  hideDNALoader() {
    this.loadingDNA = false;
  }
  getDNALoading(): boolean {
    return this.loadingDNA;
  }

  showSkeletonLoader() {
    this.loadingSkeleton = true;
  }
  hideSkeletonLoader() {
    this.loadingSkeleton = false;
  }
  getSkeletonLoading(): boolean {
    return this.loadingSkeleton;
  }

  showSpiner() {
    this.loadingSpiner = true;
  }
  hideSpiner() {
    this.loadingSpiner = false;
  }
  getSpiner(): boolean {
    return this.loadingSpiner;
  }

  
  showSkeletonLoaderComponent() {
    this.loadingSkeletonComponent = true;
  }
  hideSkeletonLoaderComponent() {
    this.loadingSkeletonComponent = false;
  }
  getSkeletonLoadingComponent(): boolean {
    return this.loadingSkeletonComponent;
  }
  

  showSkeletonLoaderTableModal() {
    this.loadingSkeletonTableModal = true;
  }
  hideSkeletonLoaderTableModal() {
    this.loadingSkeletonTableModal = false;
  }
  getSkeletonLoadingTableModal(): boolean {
    return this.loadingSkeletonTableModal;
  }

  
}
