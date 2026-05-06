import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ElementRef,
  ViewChild
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements AfterViewInit {

  @ViewChild('bgVideo')
  videoRef!: ElementRef<HTMLVideoElement>;

  enviado = false;

  contactoForm;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
      consentimiento: [false, Validators.requiredTrue]
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const video = this.videoRef.nativeElement;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    requestAnimationFrame(playVideo);
    setTimeout(playVideo, 250);
    setTimeout(playVideo, 1000);
    setTimeout(playVideo, 2000);

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        playVideo();
      }
    });
  }

  enviarFormulario() {
    if (this.contactoForm.valid) {
      this.enviado = true;
      this.contactoForm.reset();
    }
  }
}
