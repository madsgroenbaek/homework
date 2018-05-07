import { Component, OnInit,Input,Output,EventEmitter, ViewChild, ElementRef,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Form} from '@angular/forms'
import {FormGroup} from '@angular/forms'
import {FormBuilder} from '@angular/forms'


@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

    form: FormGroup;
    description:string;
    storyType:string;
    options = ["News","Face","Tweet"];
    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.description = data.description;
        this.storyType = data.storyType;
    }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.description, []],
            storyType:[this.storyType,"TV"]

        }
    );
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
    changePosition() {
        this.dialogRef.updatePosition({ top: '50px', left: '50px' });
    }
}
