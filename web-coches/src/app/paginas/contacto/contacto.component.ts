import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
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

    if (isPlatformBrowser(this.platformId)) {

      const video =
        document.querySelector('.video-bg video') as HTMLVideoElement;

      if (!video) return;

      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      video.play().catch(() => {});

      setTimeout(() => {
        video.play().catch(() => {});
      }, 500);

      setTimeout(() => {
        video.play().catch(() => {});
      }, 1500);

    }
  }

  enviarFormulario() {
    if (this.contactoForm.valid) {
      this.enviado = true;
      this.contactoForm.reset();
    }
  }
}
