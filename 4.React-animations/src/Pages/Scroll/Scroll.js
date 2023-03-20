import React, { useState } from 'react';
import './Scroll.css';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

export default function Scroll() {

    const [toggleTxt, setToggleTxt] = useState(false);

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)"
    })

    return (
        <div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam distinctio vel, laudantium eius nostrum veritatis dolor corporis pariatur magni repellat nulla officiis voluptatibus inventore maxime voluptates animi modi excepturi ad voluptas nemo sunt rem. Aut minus inventore architecto suscipit illo. Vitae ipsa delectus ab sequi dolores iure. Ratione quisquam autem enim accusamus iusto, sapiente quos hic voluptas inventore laboriosam dolores id consectetur rem nemo molestiae velit deserunt praesentium iure mollitia quia, libero laborum? Cum ea earum fuga. Aperiam aut ipsam eos optio dolorum eligendi soluta facere nostrum laudantium doloremque ex, adipisci praesentium cupiditate enim repudiandae. Ipsam aspernatur culpa possimus omnis repudiandae, repellat dolore eius. Voluptatum illo unde nulla atque modi itaque architecto amet, cum laborum sequi aliquid quidem alias, adipisci laudantium suscipit temporibus! Libero repudiandae aut sint sunt necessitatibus nihil alias soluta maiores explicabo ipsum amet expedita, a tempora quod vero est nostrum delectus atque, ea iure tenetur quas! Sint, repellendus delectus earum aspernatur sunt mollitia provident dolorum accusantium ratione veritatis quidem, tempora magnam quos hic voluptatum modi maiores ut officia architecto neque, rerum asperiores dicta! Dignissimos odio cumque ab at sunt quaerat distinctio totam vero porro nostrum commodi laboriosam labore vel in explicabo consequatur magni, incidunt voluptatem facere veritatis!
            </p>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam distinctio vel, laudantium eius nostrum veritatis dolor corporis pariatur magni repellat nulla officiis voluptatibus inventore maxime voluptates animi modi excepturi ad voluptas nemo sunt rem. Aut minus inventore architecto suscipit illo. Vitae ipsa delectus ab sequi dolores iure. Ratione quisquam autem enim accusamus iusto, sapiente quos hic voluptas inventore laboriosam dolores id consectetur rem nemo molestiae velit deserunt praesentium iure mollitia quia, libero laborum? Cum ea earum fuga. Aperiam aut ipsam eos optio dolorum eligendi soluta facere nostrum laudantium doloremque ex, adipisci praesentium cupiditate enim repudiandae. Ipsam aspernatur culpa possimus omnis repudiandae, repellat dolore eius. Voluptatum illo unde nulla atque modi itaque architecto amet, cum laborum sequi aliquid quidem alias, adipisci laudantium suscipit temporibus! Libero repudiandae aut sint sunt necessitatibus nihil alias soluta maiores explicabo ipsum amet expedita, a tempora quod vero est nostrum delectus atque, ea iure tenetur quas! Sint, repellendus delectus earum aspernatur sunt mollitia provident dolorum accusantium ratione veritatis quidem, tempora magnam quos hic voluptatum modi maiores ut officia architecto neque, rerum asperiores dicta! Dignissimos odio cumque ab at sunt quaerat distinctio totam vero porro nostrum commodi laboriosam labore vel in explicabo consequatur magni, incidunt voluptatem facere veritatis!
            </p>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam distinctio vel, laudantium eius nostrum veritatis dolor corporis pariatur magni repellat nulla officiis voluptatibus inventore maxime voluptates animi modi excepturi ad voluptas nemo sunt rem. Aut minus inventore architecto suscipit illo. Vitae ipsa delectus ab sequi dolores iure. Ratione quisquam autem enim accusamus iusto, sapiente quos hic voluptas inventore laboriosam dolores id consectetur rem nemo molestiae velit deserunt praesentium iure mollitia quia, libero laborum? Cum ea earum fuga. Aperiam aut ipsam eos optio dolorum eligendi soluta facere nostrum laudantium doloremque ex, adipisci praesentium cupiditate enim repudiandae. Ipsam aspernatur culpa possimus omnis repudiandae, repellat dolore eius. Voluptatum illo unde nulla atque modi itaque architecto amet, cum laborum sequi aliquid quidem alias, adipisci laudantium suscipit temporibus! Libero repudiandae aut sint sunt necessitatibus nihil alias soluta maiores explicabo ipsum amet expedita, a tempora quod vero est nostrum delectus atque, ea iure tenetur quas! Sint, repellendus delectus earum aspernatur sunt mollitia provident dolorum accusantium ratione veritatis quidem, tempora magnam quos hic voluptatum modi maiores ut officia architecto neque, rerum asperiores dicta! Dignissimos odio cumque ab at sunt quaerat distinctio totam vero porro nostrum commodi laboriosam labore vel in explicabo consequatur magni, incidunt voluptatem facere veritatis!
            </p>
            <Waypoint
                bottomOffset="30%"
                onEnter={() => {
                    if (!toggleTxt) {
                        setToggleTxt(true)
                    }
                }}
            />

            <animated.div style={animation} className="cta-section">
                <h2>N'en ratez pas une miette !</h2>
                <form>
                    <label htmlFor="newsletter">Inscrivez-vous à la newsletter</label>
                    <input type="email" id="newsletter" />
                </form>
            </animated.div>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam distinctio vel, laudantium eius nostrum veritatis dolor corporis pariatur magni repellat nulla officiis voluptatibus inventore maxime voluptates animi modi excepturi ad voluptas nemo sunt rem. Aut minus inventore architecto suscipit illo. Vitae ipsa delectus ab sequi dolores iure. Ratione quisquam autem enim accusamus iusto, sapiente quos hic voluptas inventore laboriosam dolores id consectetur rem nemo molestiae velit deserunt praesentium iure mollitia quia, libero laborum? Cum ea earum fuga. Aperiam aut ipsam eos optio dolorum eligendi soluta facere nostrum laudantium doloremque ex, adipisci praesentium cupiditate enim repudiandae. Ipsam aspernatur culpa possimus omnis repudiandae, repellat dolore eius. Voluptatum illo unde nulla atque modi itaque architecto amet, cum laborum sequi aliquid quidem alias, adipisci laudantium suscipit temporibus! Libero repudiandae aut sint sunt necessitatibus nihil alias soluta maiores explicabo ipsum amet expedita, a tempora quod vero est nostrum delectus atque, ea iure tenetur quas! Sint, repellendus delectus earum aspernatur sunt mollitia provident dolorum accusantium ratione veritatis quidem, tempora magnam quos hic voluptatum modi maiores ut officia architecto neque, rerum asperiores dicta! Dignissimos odio cumque ab at sunt quaerat distinctio totam vero porro nostrum commodi laboriosam labore vel in explicabo consequatur magni, incidunt voluptatem facere veritatis!
            </p>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam distinctio vel, laudantium eius nostrum veritatis dolor corporis pariatur magni repellat nulla officiis voluptatibus inventore maxime voluptates animi modi excepturi ad voluptas nemo sunt rem. Aut minus inventore architecto suscipit illo. Vitae ipsa delectus ab sequi dolores iure. Ratione quisquam autem enim accusamus iusto, sapiente quos hic voluptas inventore laboriosam dolores id consectetur rem nemo molestiae velit deserunt praesentium iure mollitia quia, libero laborum? Cum ea earum fuga. Aperiam aut ipsam eos optio dolorum eligendi soluta facere nostrum laudantium doloremque ex, adipisci praesentium cupiditate enim repudiandae. Ipsam aspernatur culpa possimus omnis repudiandae, repellat dolore eius. Voluptatum illo unde nulla atque modi itaque architecto amet, cum laborum sequi aliquid quidem alias, adipisci laudantium suscipit temporibus! Libero repudiandae aut sint sunt necessitatibus nihil alias soluta maiores explicabo ipsum amet expedita, a tempora quod vero est nostrum delectus atque, ea iure tenetur quas! Sint, repellendus delectus earum aspernatur sunt mollitia provident dolorum accusantium ratione veritatis quidem, tempora magnam quos hic voluptatum modi maiores ut officia architecto neque, rerum asperiores dicta! Dignissimos odio cumque ab at sunt quaerat distinctio totam vero porro nostrum commodi laboriosam labore vel in explicabo consequatur magni, incidunt voluptatem facere veritatis!
            </p>
        </div>
    )
}
