# musicHUB

ფინალური პოექტი ვებ-პროგრამირების საგანში

## Info

- **სათაური**: musicHUB
- **აღწერა**: საიტი წარმოადგენს მუსიკების მონაცემთა ბაზას
- **API**:  [https://www.theaudiodb.com/api_guide.php](https://www.theaudiodb.com/api_guide.php)

## Features

1) - [ ] მთავარი გვერდი(მუსიკოსი / ბენდი Search)
     - [ ] ძებნა მუსიკოსი/ბენდი სახელით


2) - [ ] ალბომების გვერდი
      - [ ] ინფორმაცია ალბომზე
      - [ ] ალბომის ფოტო
      - [ ] სიმღერების ჩამონათვალი + ლინკი სიმღერებზე

3) - [ ] სიმღერის გვერდი
      - [ ] სიმღერის ლირიქსი, სამწუხაროდ api შუა წერისას ფასიანი გახდა ამიტომ not available დავაწერე
      - [ ] სიმღერის იუთუბ ფლეიერი

## API

 1) - [ ] მუსიკოსის/ბენდის ამოღება სახელით : https://theaudiodb.com/api/v1/json/1/search.php?s=${artistName}: 
 2) - [ ] ყველა ალბომის მოძებნა მუსიკოსის აიდის მიხედვით : https://theaudiodb.com/api/v1/json/1/album.php?i=${id}
 3) - [ ] ყველა სიმღერის მოძებნა ალბომის აიდის მიხედვით : https://theaudiodb.com/api/v1/json/1/track.php?m=${albumId}
 4) - [ ] ალბომზე ინფორმაციის ამოღება ალბომის აიდის მიხედვით : https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}
 5) - [ ] სიმღერაზე ინფორმაციის ამოღება სიმღერის აიდის მიხედვით : https://theaudiodb.com/api/v1/json/1/track.php?h=${songId}


 ## HOSTING
 - [ ] https://nikoade.github.io/web-project-musicHUB/index.html