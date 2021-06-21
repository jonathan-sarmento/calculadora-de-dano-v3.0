from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():

    personagens = [
        {
            'nome': 'bb-8',
            'dano': 8,
            'img': "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/bdbd4929238821.5681474dec85b.png"
        },
        {
            'nome': 'poe-dameron',
            'dano': 12,
            'img': "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/979ee129238821.5681474dea1d9.png"
        },
        {
            'nome': 'chewbacca',
            'dano':  18,
            'img': "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/58c49c29238821.5681474de7f0d.png"
        }
    ]

    viloes = [
        {
            'nome': 'stormtrooper',
            'dano': 8*2,
            'img': "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3aba9f29238821.5681474de00fd.png"
        },
        {
            'nome': 'general-hux',
            'dano': 8*2,
            'img': "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b1829529238821.5681474ddea3a.png"
        },
        {
            'nome': 'kylo-ren',
            'dano': 18 + 10,
            'img': "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/40476d29238821.5681474de5dd0.png"
        }
    ]

    armas = [
        {
            'nome': 'luke-light',
            'dano': 5,
            'img': "http://freevector.co/wp-content/uploads/2011/12/90347-lightsaber.png"
        },
        {
            'nome': 'han-blaster',
            'dano': 7,
            'img': "https://cdn2.iconfinder.com/data/icons/star-wars-6/24/Laser-gun-512.png"
        },
        {
            'nome': 'anakin-light',
            'dano': 9,
            'img': "https://th.bing.com/th/id/Re1b22b569b51ed18bbca8a3fc87b2d36?rik=8EszyVjaocMhJQ&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2013%2f09%2f90150-star-wars.png&ehk=9q65s74CaXrkvgz7EiaX5rboO5FQ3ynKaBB6bntriB4%3d&risl=&pid=ImgRaw"
        }
    ]

    return render_template('index.html', personagens=personagens, viloes=viloes, armas=armas)

if __name__ == '__main__':
    app.run(debug=True)