import styles from './cursor.module.css'
import React, {useEffect, useRef} from "react";

export default function Cursor() {
    let denta = 0
    let theta = 0;
    const canvasRef = useRef(null)
    useEffect(() => {
       
        if(window.innerWidth > 1024) {
            denta = 5 * window.innerWidth / 100
        }
        else {
            theta = 8 * window.innerHeight / 100
        }
        const cursorArea = document.querySelector(".cursor-area")
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = canvasRef.current.clientWidth;
        canvas.height = canvasRef.current.clientHeight;
        let spots = [];
        let hue = 0;
        const mouse  = {
            x: undefined,
            y: undefined
        }
        cursorArea.addEventListener("mousemove", (e : MouseEvent) => {
            mouse.x = e.x; // dùng offsetX và Y khá lỗi
            mouse.y = e.y;
            for(let i = 0; i < 3; i++) {
                spots.push(new Particle())
            }
        })
        class Particle{
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = mouse.x;
                this.y = mouse.y
                this.size = Math.random() * 2 + 0.1;
                this.speedX = Math.random() *2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = 'hsl(' + hue + ', 100%, 50% )'
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY
                if(this.size > 0.1) this.size -= 0.03
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        const handleParticle = () => {
            for(let i = 0; i < spots.length; i++) {
                spots[i].update();
                spots[i].draw();
                for(let j = i; j < spots.length; j++) {
                    const distance = Math.sqrt(Math.pow(spots[i].x - spots[j].x, 2) + Math.pow(spots[i].y - spots[j].y, 2))
                    if(distance < 90) {
                        ctx.beginPath();
                        ctx.strokeStyle = spots[i].color;
                        ctx.lineWidth = spots[i].size / 10;
                        ctx.moveTo(spots[i].x, spots[i].y)
                        ctx.lineTo(spots[j].x, spots[j].y);
                        ctx.stroke();
                    }
                }
                if(spots[i].size <= 0.3) {
                    spots.splice(i, 1);
                    i--;
                }
            }
        }
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticle();
            hue++;
            requestAnimationFrame(animate)
        }
        window.addEventListener("resize", (e) => {
            canvas.width = canvasRef.current.clientWidth
            canvas.height = canvasRef.current.clientHeight
            if(window.innerWidth > 1024) {
                denta = 5 * window.innerWidth / 100
                theta = 0;
            }
            else {
                theta = 8 * window.innerHeight / 100
                denta = 0;
            }
            // init()
        })
        cursorArea.addEventListener("mouseout", (e) => {
            mouse.x = undefined;
            mouse.y = undefined;
        })
        animate()
    })

    return <canvas ref={canvasRef} className={styles.canvas}></canvas>
}