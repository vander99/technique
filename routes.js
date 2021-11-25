const router = require('express').Router();

router.post('/maxSurfaceEau', function (req, res) {

  let heightList = req.body.buildingsHeightList;
  let ListLength = heightList.length
  let surface = 0;

  for (let index=1;index<ListLength;index++){
    let maxGauche = 0
    let maxDroite = 0
    for (let i=index-1; i>=0; i--){
      if (maxGauche < heightList[i]){
        maxGauche = heightList[i]
      }
    }
    for (let i=index+1;i<ListLength;i++){
      if (maxDroite<heightList[i]){
        maxDroite = heightList[i]
      }
    }
    if (heightList[index] < Math.min(maxDroite,maxGauche)){
      let addSurface = Math.min(maxDroite,maxGauche) - heightList[index]
      surface = surface+addSurface
    }
  }
  
  res.send(surface.toString());
});

router.post('/maxSurfaceEauOpt', function (req, res) {

  let heightList = req.body.buildingsHeightList;
  let ListLength = heightList.length
  let surface = 0;

  let maxGauche = 0
  let maxDroite = 0
  for (let i=1;i>=0;i--){
    if (maxGauche < heightList[i]){
      maxGauche = heightList[i]
    }
  }
  for (let i=1;i<ListLength;i++){
    if (maxDroite<heightList[i]){
      maxDroite = heightList[i]
    }
  }
  surface = surface + Math.min(maxDroite,maxGauche) - heightList[1]

  for (let index=2;index<ListLength;index++){

    if (heightList[index] == maxDroite){
      maxDroite = 0
      for (let i=index+1;i<ListLength;i++){
        if (maxDroite<heightList[i]){
          maxDroite = heightList[i]
        }
      }
    }
    else if (heightList[index+1] > maxDroite){
      maxDroite = heightList[index+1]
    }

    if (heightList[index] == maxGauche){
      maxGauche = 0
      for (let i=index-1; i>=0; i--){
        if (maxGauche < heightList[i]){
          maxGauche = heightList[i]
        }
      }
    }
    else if (heightList[index-1] > maxGauche){
      maxGauche = heightList[index-1]
    }

    if (heightList[index] < Math.min(maxDroite,maxGauche)){
      let addSurface = Math.min(maxDroite,maxGauche) - heightList[index]
      surface = surface+addSurface
    }
  }
  
  res.send(surface.toString());
});

module.exports = router;