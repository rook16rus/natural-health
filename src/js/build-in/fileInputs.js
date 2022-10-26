import Dropzone from "dropzone";
import modalFix from "./modalFix";

export default function fileInputs() {
    const inputs = document.querySelectorAll('.js-dropzone');
    const TOTAL_LENGTH = 4;

    inputs.forEach(input => {
        const container = input.closest('.js-dropzone-container');
        const content = container.querySelector('.js-dropzone-content');
        const progressBlock = container.querySelector('.js-dropzone-progress-block')
        const progress = container.querySelector('.js-dropzone-progress');
        const progressCount = container.querySelector('.js-dropzone-progress-count')

        const dropzone = new Dropzone(input, {
            addRemoveLinks: true,
            maxFiles: TOTAL_LENGTH,
        })

        calculateProgress();

        dropzone.on('addedfile', (file) => {
            if (!checkFormat(file)) {
                dropzone.removeFile(file);
            }

            hideButton();
            hideContent();
            calculateProgress();
            showProgress();
            modalFix();
        })

        dropzone.on('removedfile', () => {
            hideButton();
            hideContent();
            calculateProgress();
            showProgress();
            modalFix();
        })

        dropzone.on('maxfilesexceeded', (file) => {
            dropzone.removeFile(file);
        })

        function showProgress() {
            if (checkFilesLength(1)) {
                progressBlock.classList.add('show');
            } else {
                progressBlock.classList.remove('show');
            }
        }

        function calculateProgress() {
            const length = dropzone.files.length;
            const percent = (length * 100) / TOTAL_LENGTH;

            progress.style.setProperty('--percent', percent + '%');
            progressCount.textContent = length < 10 ? '0' + length : length;
        }

        function checkFormat(file) {
            const format = file.name.slice(-3);

            if (format === 'jpg' || format === 'png' || format === 'jpeg') {
                return true;
            } else {
                return false;
            }
        }

        function checkFilesLength(length) {
            if (dropzone.files.length >= length) {
                return true
            } else {
                return false
            }
        }

        function hideButton() {
            const button = container.querySelector('.dz-message');

            if (checkFilesLength(TOTAL_LENGTH)) {
                button.classList.add('hide');
            } else {
                button.classList.remove('hide');
            }
        }

        function hideContent() {
            if (checkFilesLength(1)) {
                content.classList.add('hide');
            } else {
                content.classList.remove('hide');
            }
        }
    })
}