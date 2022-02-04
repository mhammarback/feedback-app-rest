import router from "@sitevision/api/common/router";
import events from "@sitevision/api/server/events";
import resourceLocatorUtil, { getNodeByIdentifier } from "@sitevision/api/server/ResourceLocatorUtil";

import portletContextUtil from "@sitevision/api/server/PortletContextUtil";
import properties from "@sitevision/api/server/Properties";
import logUtil from "@sitevision/api/server/LogUtil";

events.on("sv:publishing:publish", (options) => {
  //plocka ut hela noden för att sedan plocka ut värden
  const page = resourceLocatorUtil.getNodeByIdentifier(options.node);
  log.info("sv:publishing:publish " + JSON.stringify(options));
});



router.get("/getCurrentUserProperty", (req, res) => {
  const { value } = req.params;
  //HJÄLPKLASS        //METOD
  const currentUser = portletContextUtil.getCurrentUser();
  const userValue = properties.get(currentUser, value);

  res.json({ userValue });
});

router.get('/myroute', (req, res) => {
  res.json({ message: 'Hello from GET' });
});

router.post('/myroute', (req, res) => {
  res.json({ message: 'Hello from POST' });
});

router.put('/myroute', (req, res) => {
  res.json({ message: 'Hello from PUT' });
});

router['delete']('/myroute', (req, res) => {
  res.json({ message: 'Hello from DELETE' });
});
